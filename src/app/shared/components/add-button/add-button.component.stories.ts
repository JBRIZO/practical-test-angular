
import type { Meta, StoryObj } from '@storybook/angular';

import { applicationConfig, argsToTemplate, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { AddButtonComponent } from './add-button.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const meta: Meta<AddButtonComponent> = {
  title: 'Add Button',
  component: AddButtonComponent,
  tags: ['autodocs'],
  decorators: [
        moduleMetadata({
            imports: [MatButtonModule, MatIconModule],
        }),
        applicationConfig({
            providers: [provideRouter(routes)],
        }),
        componentWrapperDecorator((story) => `${story}`),
    ],
    render: (args: AddButtonComponent) => ({
    props: {
      ...args
    },
    template: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <app-add-button ${argsToTemplate(args)}></app-add-button>`,
  }),
};

export default meta;
type Story = StoryObj<AddButtonComponent>;

export const Active: Story = {
  args: {
    section: {
        name: 'Active',
        link: 'home'
    },
  },
};
export const Inactive: Story = {
  args: {
    section: {
        name: 'Inactive',
        link: 'link'
    },
  },
};