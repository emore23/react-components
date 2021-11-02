// Dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Button } from '../Components/Button/button.component';
import { Title } from '../Components/Title/title.component';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// Stories

const DefaultButton: ComponentStory<typeof Button> = (args) => 
  <Button {...args}><Title appeareance="#fff" content="Button" /></Button>;

const ButtonWithBorder: ComponentStory<typeof Button> = (args) => 
  <Button {...args}><Title appeareance="#11142D" content="Button" /></Button>;


export const Primary = DefaultButton.bind({});

export const Secondary = ButtonWithBorder.bind({});


Primary.args = {
  appeareance: '#3772FF',
  hasBorder: 'none'
};

Secondary.args = {
  appeareance: '#fff',
  hasBorder: '2px solid #E6E8EC'
};
