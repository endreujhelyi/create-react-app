import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main, { Code } from './Main';

configure({ adapter: new Adapter() });

const component = shallow(<Main />);

describe('<Main>', () => {
	it('should render properly', () => {
		expect(component).toMatchSnapshot();
	});

	it('should contain Code components', () => {
		const codes = component.find(Code);
		expect(codes).toBeTruthy();
	})
});

