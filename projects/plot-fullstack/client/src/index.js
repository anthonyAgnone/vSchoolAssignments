import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GameProvider from './components/GameProvider';
import Reboot from './components/Reboot';

ReactDOM.render(
	<DragDropContextProvider backend={HTML5Backend}>
		<GameProvider>
			<BrowserRouter>
				<Reboot>
					<App />
				</Reboot>
			</BrowserRouter>
		</GameProvider>
	</DragDropContextProvider>,
	document.getElementById('root')
);
