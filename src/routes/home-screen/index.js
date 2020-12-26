import { createRef, h } from 'preact';
// import { GESTURES } from '../../util/EventTarget.addGestureListener'
import Launcher from '../../components/launcher';
// import { useEffect } from 'preact/hooks';

import style from './style';

const HomeScreen = (props) => {
	// const screen = createRef();

	// useEffect(() => {
	// 	// alert('works')
	// 	screen.current.addGestureListener(GESTURES.DRAW_X, (e) => {
  //     if(e.type == 'in-motion') {
  //       // contentBox is the parent of gestureBox
  //       // console.log(e.movementY)
  //       // e.target.parentElement.style.transform = 'translateY('+(Math.max(0, e.movementY)*1.5)+'px)';
  //       // e.target.parentElement.style['transition-property'] = 'none';
  //       // let css = e.target.parentElement.style.cssText
  //       // console.log(css);
  //       // e.target.parentElement.style.cssText = css.replace(/top:.*px(\s!important)?;/,'top:'+Math.round(Math.max(0, e.movementY)*1.5+(window.innerHeight/10))+'px !important;');
  //     } else {
	// 			alert(JSON.stringify(e))
				
  //     }
  //   }, {
  //     minSwipeDistance: 40,
  //     // continuous: true,
  //   })
	// }, [])

	return (
		<div class={style.homescreen}
			// ref={screen}
		>
			<Launcher icon='store' title='App Store'/>
			<Launcher/>
			<Launcher/>
			<Launcher icon='cogs' title='Settings'/>
			<Launcher icon='male' title='Hangapp' src='https://kylesureline.com/hangapp/#/'/>
			<Launcher icon='hotel' title='Tower Game' src='https://towergame.app'/>
			<Launcher icon='cube' title='The Cube' src='https://bsehovac.github.io/the-cube/'/>
			<Launcher title='Doodle Cricket' src='https://doodlecricket.github.io/index.html#/'/>
			<Launcher icon='project-diagram' title='Breaklock' src='https://maxwellito.github.io/breaklock/'/>
			<Launcher icon='th' title='Tic Tac Toe' src='https://tmaiadev-tictactoe.netlify.app'/>
			<Launcher icon='dice-five' title='Dominoes' src='https://dominoes.playdrift.com'/>
			<Launcher icon='ghost' title='Pacman' src='https://bobrov.dev/pacman-pwa/index.html'/>
			<Launcher icon='stopwatch' title='Stopwatch' src='https://stopwatch-app.com'/>
			<Launcher icon='calculator' title='Calculator' src='https://calculator.iondrimbafilho.me'/>
			<Launcher icon='wifi' title='Snapdrop' src='https://snapdrop.net'/>
			<Launcher icon='check-square' title='Todolist' src='https://todo.geekydevs.com'/>
			<Launcher icon='' title='Little Alchemy 2' src='https://littlealchemy2.com'/>
			<Launcher icon={['far', 'circle']} title='Circle Flip' src='https://the-circle.app'/>
			<Launcher icon='' title='Dead or Alive' src='https://rick-and-morty-game.ahmetkapusuz.now.sh'/>
			<Launcher icon='' title='Circle Platform' src='https://circlegame.richterpaul.de/level/'/>
			<Launcher icon='gamepad' title='Snake' src='https://tmaiadev-snake.netlify.app'/>
			<Launcher icon='gamepad' title='Tetra' src='https://tmaiadev-tetra.netlify.app'/>
			<Launcher icon='exchange-alt' title="Arrow Rain" src='https://arrows-rain.firebaseapp.com'/>
		</div>
	);
}

export default HomeScreen;