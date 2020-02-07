import ReactDom from 'react-dom';
import React from 'react';
import { EditUser } from './components/ui/EditUser';
import { NumberSelector } from './components/NumberSelector';

ReactDom.render(<EditUser />,document.getElementById('root'));
// ReactDom.render(<NumberSelector LabelText="Age:" InitialNumber={19} MinNumber={18} MaxNumber={120}/>,document.getElementById('root'));