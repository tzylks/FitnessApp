
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Typography, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'




function Dashboard({ currentUser }) {

    const styles = StyleSheet.create({
        fadeIn: {
            animationName: fadeIn,
            animationDuration: '1s'
        }
    })

    return (
        <>

            <Parallax y={[2000, -10]} tagOuter="figure">
                <Typography style={{ marginLeft: '17vw', fontSize: '5rem', textDecoration: 'none', background: 'linear-gradient(90deg, #78DEC7  10%, #D62AD0 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Welcome Back, {currentUser.username}
                </Typography>
            </Parallax>

            <Parallax y={[20, -10]} tagOuter="figure">
                <Typography style={{ marginLeft: '17vw', fontSize: '10rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Your Fitness Journey Begins Now
                </Typography>
            </Parallax>

            <Parallax y={[20, 50]} x={[100, -90]} tagOuter="figure">
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '5rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Add Exercises
                </Typography>
            </Parallax>

            <Parallax y={[20, 50]} x={[-20, 120]} tagOuter="figure">
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '5rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Add Fitness Goals
                </Typography>
            </Parallax>

         


            <Parallax y={[20, 50]} x={[-20, 100]} tagOuter="figure">
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '4rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Premium Plans Starting at $10,000
                </Typography>
            </Parallax>

            <Parallax y={[70, -10]} x={[-20, 120]} tagOuter="figure">
                <motion.div
                    style={{
                        zIndex: "1",
                        borderRadius: "70%",
                        height: "30vh",
                        width: "30vh",
                        marginBottom: '30vh',
                        
                        background: "radial-gradient(circle at 65% 15%, white 1px, #D62AD0 3%, purple 60%, #D62AD0 100%)"
                    }}

                    animate={{ x: [0, 100, 100, -100, 0], y: [0, -100, 0, 100], rotate: 1000 }}
                    transition={{ duration: 10, loop: Infinity, ease: "linear" }} />
            </Parallax>

            <Parallax y={[-200, 50]} x={[190, -100]} tagOuter="figure">
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '4rem', textDecoration: 'none', background: 'linear-gradient(90deg, #78DEC7  10%, #D62AD0 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Thanks for Choosing Tao
                </Typography>
            </Parallax>





            <Parallax y={[-40, 100]} x={[-50, 110]} tagOuter="figure">
                <img src="https://officialpsds.com/imageview/79/91/7991z0_large.png?1521316586" />
            </Parallax>



            <Parallax y={[-360, 100]} x={[-20, 200]} tagOuter="figure">
                <Button component={NavLink} to='/exercises'>
                    <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '6rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                        Click Here to Start Now
                    </Typography>
                </Button>
            </Parallax>
            <Parallax y={[-360, 100]} x={[-20, 200]} tagOuter="figure">
                <motion.div
                    style={{

                        borderRadius: "70%",
                        height: "30vh",
                        width: "30vh",
                        marginBottom: '30vh',

                        background: "radial-gradient(circle at 65% 15%, white 1px, #78DEC7 3%, royalblue 60%, #78DEC7 100%)"
                    }}
                    animate={{ x: [0, 300, 100, -100, 0], y: [0, -900, 0, 100], rotate: 1000 }}
                    transition={{ duration: 10, loop: Infinity, ease: "linear" }}
                />
            </Parallax>

        </>


    )
}



export default Dashboard