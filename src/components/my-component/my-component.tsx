import { Component, Listen, Prop, State, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() stateValue: string = 'foo';
  
  @Listen('ChangeValue')
  onChangeValue(event: CustomEvent<string>) {
    this.stateValue = event.detail;
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
  
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
}
