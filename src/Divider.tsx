import React from 'react';
import { Column } from './View';

interface IProps {
    color?: string;
}

const Divider = ({ color = '#EAEAEA' }: IProps) => {
    return (
        <Column
            height={1}
            background={color}
        />
    );
};

export default Divider;
