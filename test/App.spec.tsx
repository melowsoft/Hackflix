import {shallow} from 'enzyme';
import React from 'react';
import  ReactDOM  from 'react-dom';
import {App} from '../src/App';
import 'jest-enzyme'
import { Footer } from '../src/components/Footer';
import { AppContextProvider } from '../src/context/AppContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

test('App render without crashing', () => {
   
    const div = document.createElement('div')
    ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </QueryClientProvider>, div)

});

