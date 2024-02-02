import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  let page: SpecPage;
  let root: HTMLElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    root = page.root;
  });

  test('test error', async () => {
    // const spy = jest.spyOn(page.rootInstance, 'stateValue', 'set')

    root.dispatchEvent(new CustomEvent('ChangeValue', { detail: 'bar' }))
    await page.waitForChanges()

    expect(page.rootInstance.stateValue).toBe('bar');
    // expect(spy).toHaveBeenCalled();

  })


  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
