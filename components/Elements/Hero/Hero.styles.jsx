import { createUseStyles } from "react-jss";

export const heroStyles = createUseStyles({
    heroContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/bio-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: 792
    }
})