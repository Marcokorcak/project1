/* eslint-disable no-undef */
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Conversion from './conversions';
import CurRates from './curRates';

describe('<Conversion />', () => {
	test('App mounts properly', () => {
		const wrapper = render(<Conversion />);
		expect(wrapper).toBeTruthy();
	});
});

describe('<CurRates />', () => {
	test('App mounts properly', () => {
		const wrapper = render(<CurRates />);
		expect(wrapper).toBeTruthy();
	});
});

