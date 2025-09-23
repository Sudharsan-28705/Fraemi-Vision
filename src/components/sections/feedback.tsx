import React, { useState, useRef, useEffect, useCallback } from 'react';

// --- DATA FOR THE FEEDBACK CARDS ---
// Using a data array makes the component more modular and easier to update.
const feedbackData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chocolate Cake",
    rating: 5,
    title: "Amazing!",
    review: "Absolutely loved this chocolate cake! Rich, moist, and the perfect amount of sweetness. Highly recommend!",
    userInitial: "FG",
    userName: "FoodieGuru87",
    userColor: "bg-red-900/20 text-red-400"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Strawberry Cake",
    rating: 4,
    title: "Pretty Good",
    review: "The strawberry shortcake was delightful. Fresh berries and light cream. Could be a little less sweet, but still very enjoyable.",
    userInitial: "CT",
    userName: "CakeTaster",
    userColor: "bg-blue-900/20 text-blue-400"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606313564200-e85413148424?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cheesecake",
    rating: 5,
    title: "Absolutely Decadent!",
    review: "The cheesecake was heavenly. So creamy and the crust was perfect. A must-try for any dessert lover!",
    userInitial: "DL",
    userName: "DessertLover",
    userColor: "bg-green-900/20 text-green-400"
  }
];

// --- REUSABLE STAR ICON COMPONENT ---
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`h-6 w-6 ${filled ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--muted))]'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);


// --- FEEDBACK SLIDER COMPONENT ---
const FeedbackSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const sliderWrapperRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const startPosRef = useRef(0);
    const currentTranslateRef = useRef(0);
    const prevTranslateRef = useRef(0);
    const animationFrameRef = useRef<number | null>(null);
    const cardWidthRef = useRef(0);
    
    // Cloned cards for infinite loop effect
    const sliderItems = [feedbackData[feedbackData.length - 1], ...feedbackData, feedbackData[0]];
    const totalCards = sliderItems.length;

    const setSliderPosition = useCallback(() => {
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
        }
    }, []);

    const animationLoop = useCallback(() => {
        setSliderPosition();
        if (isDraggingRef.current) {
            animationFrameRef.current = requestAnimationFrame(animationLoop);
        }
    }, [setSliderPosition]);

    const getPositionX = (event: React.MouseEvent | React.TouchEvent) => {
        return 'touches' in event ? event.touches[0].clientX : event.pageX;
    };

    const handleDragStart = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        isDraggingRef.current = true;
        startPosRef.current = getPositionX(event);
        prevTranslateRef.current = currentTranslateRef.current;
        
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(animationLoop);
        
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.style.transition = 'none';
            sliderWrapperRef.current.classList.add('grabbing');
        }
    }, [animationLoop]);

    const handleDrag = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        if (isDraggingRef.current) {
            const currentPosition = getPositionX(event);
            currentTranslateRef.current = prevTranslateRef.current + currentPosition - startPosRef.current;
        }
    }, []);

    const handleDragEnd = useCallback(() => {
        isDraggingRef.current = false;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        const movedBy = currentTranslateRef.current - prevTranslateRef.current;
        let newIndex = currentIndex;
        if (movedBy < -100 && currentIndex < totalCards - 1) {
            newIndex++;
        }
        if (movedBy > 100 && currentIndex > 0) {
            newIndex--;
        }
        
        setCurrentIndex(newIndex);
        
        if (sliderWrapperRef.current) {
            sliderWrapperRef.current.classList.remove('grabbing');
            sliderWrapperRef.current.style.transition = 'transform 0.4s ease-out';
        }
    }, [currentIndex, totalCards]);
    
    const moveTo = (index: number) => {
         if (sliderWrapperRef.current) {
            sliderWrapperRef.current.style.transition = 'transform 0.4s ease-out';
        }
        setCurrentIndex(index);
    }
    
    // Effect for initializing and resizing
    useEffect(() => {
        const calculateCardWidth = () => {
            if (sliderWrapperRef.current?.firstElementChild) {
                const cardNode = sliderWrapperRef.current.firstElementChild as HTMLElement;
                const cardStyle = window.getComputedStyle(cardNode);
                const margin = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
                cardWidthRef.current = cardNode.offsetWidth + margin;
                currentTranslateRef.current = -currentIndex * cardWidthRef.current;
                prevTranslateRef.current = currentTranslateRef.current;
                setSliderPosition();
            }
        };

        calculateCardWidth();
        window.addEventListener('resize', calculateCardWidth);
        return () => window.removeEventListener('resize', calculateCardWidth);
    }, [currentIndex, setSliderPosition]);


    // Effect for handling the slide transition and infinite loop logic
    useEffect(() => {
        currentTranslateRef.current = -currentIndex * cardWidthRef.current;
        prevTranslateRef.current = currentTranslateRef.current;
        setSliderPosition();

        const handleTransitionEnd = () => {
            if (currentIndex === 0) {
                if (sliderWrapperRef.current) sliderWrapperRef.current.style.transition = 'none';
                setCurrentIndex(totalCards - 2);
            }
            if (currentIndex === totalCards - 1) {
                if (sliderWrapperRef.current) sliderWrapperRef.current.style.transition = 'none';
                setCurrentIndex(1);
            }
        };

        const wrapper = sliderWrapperRef.current;
        wrapper?.addEventListener('transitionend', handleTransitionEnd);
        return () => wrapper?.removeEventListener('transitionend', handleTransitionEnd);

    }, [currentIndex, totalCards, setSliderPosition]);


    const activeDotIndex = (currentIndex -1 + feedbackData.length) % feedbackData.length;

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-foreground">What Our Customers Say</h1>
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        ref={sliderWrapperRef}
                        className="flex cursor-grab"
                        onMouseDown={handleDragStart}
                        onTouchStart={handleDragStart}
                        onMouseMove={handleDrag}
                        onTouchMove={handleDrag}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchEnd={handleDragEnd}
                    >
                        {sliderItems.map((card, i) => (
                            <div
                                key={i}
                                className={`flex-shrink-0 w-full md:w-[calc(90%-2rem)] mx-4 transition-all duration-500 ease-out ${currentIndex === i ? 'scale-100 opacity-100' : 'scale-90 opacity-70'}`}
                                aria-hidden={currentIndex !== i}
                            >
                                <div className="flex flex-col md:flex-row bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden h-full">
                                    <img src={card.image} alt={card.alt} className="w-full md:w-[45%] h-64 md:h-auto object-cover" />
                                    <div className="p-8 flex flex-col justify-center w-full md:w-[55%]">
                                        <h2 className="text-2xl font-bold mb-2">Customer Feedback</h2>
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <StarIcon key={starIndex} filled={starIndex < card.rating} />
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                                        <p className="text-muted-foreground mb-6 text-lg">{card.review}</p>
                                        <div className="flex items-center">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4 ${card.userColor}`}>
                                                <span>{card.userInitial}</span>
                                            </div>
                                            <span className="font-semibold">{card.userName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 {/* Navigation Buttons */}
                <button onClick={() => moveTo(currentIndex - 1)} className="absolute top-1/2 -translate-y-1/2 left-[-1.5rem] md:left-[-4rem] bg-card/80 rounded-full w-12 h-12 flex justify-center items-center z-10 shadow-md hover:bg-card hover:scale-110 transition-transform">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => moveTo(currentIndex + 1)} className="absolute top-1/2 -translate-y-1/2 right-[-1.5rem] md:right-[-4rem] bg-card/80 rounded-full w-12 h-12 flex justify-center items-center z-10 shadow-md hover:bg-card hover:scale-110 transition-transform">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
             {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-3">
                {feedbackData.map((_, i) => (
                    <button key={i} onClick={() => moveTo(i+1)} className={`h-3 w-3 rounded-full transition-colors ${activeDotIndex === i ? 'bg-primary' : 'bg-muted'}`}></button>
                ))}
            </div>
        </div>
    );
};


// --- GLOBAL STYLES AND MAIN APP COMPONENT ---
// This is the standard way to set up a React application.
export default function Feedback() {
  return (
    <>
      <style>{`
        /* --- Your Requested Global Styles --- */
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer base {
          :root {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
            --card: 0 0% 100%;
            --card-foreground: 222.2 84% 4.9%;
            --popover: 0 0% 100%;
            --popover-foreground: 222.2 84% 4.9%;
            --primary: 259 36% 48%;
            --primary-foreground: 259 100% 95%;
            --secondary: 210 40% 96.1%;
            --secondary-foreground: 215.4 16.3% 46.9%;
            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;
            --accent: 259 100% 87%;
            --accent-foreground: 259 36% 30%;
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 40% 98%;
            --border: 214.3 31.8% 91.4%;
            --input: 214.3 31.8% 91.4%;
            --ring: 222.2 84% 4.9%;
            --radius: 0.5rem;
          }
          .dark {
            --background: 0 0% 7%;
            --foreground: 0 0% 98%;
            --card: 0 0% 10%;
            --card-foreground: 0 0% 98%;
            --popover: 0 0% 10%;
            --popover-foreground: 0 0% 98%;
            --primary: 259 36% 48%;
            --primary-foreground: 259 100% 95%;
            --secondary: 0 0% 14.9%;
            --secondary-foreground: 0 0% 98%;
            --muted: 0 0% 20%;
            --muted-foreground: 0 0% 63.9%;
            --accent: 259 100% 87%;
            --accent-foreground: 259 36% 30%;
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 0% 98%;
            --border: 0 0% 14.9%;
            --input: 0 0% 14.9%;
            --ring: 259 100% 87%;
          }
        }
        @layer base {
          * {
            @apply border-border;
          }
          body {
            @apply bg-background text-foreground;
            scroll-behavior: smooth;
          }
          *::-webkit-scrollbar {
            display: none;
          }
          * {
            scrollbar-width: none;
          }
        }
      `}</style>
      <main className="dark font-sans flex flex-col justify-center items-center min-h-screen p-8 overflow-hidden">
        <FeedbackSlider />
      </main>
    </>
  );
}
