import React from 'react'

const Common_footer = () => {
    return (
        <>
            <footer className="bg-background border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-sm">
              © {new Date().getFullYear()} Fraemi Vision. All rights reserved.
            </div>
          </footer>
        </>
    )
}

export default Common_footer