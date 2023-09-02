import { describe, expect, it } from 'vitest';
import Avatar from './Avatar';
import { render, screen } from '../test-utils';

describe('Avatar', () => {
    it('the avatar is visible', () => {
        render(<Avatar />);
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });
});
