
import Layout from '../modules/layout/Layout.jsx';

describe('<Layout />', () => {
  it('should match snapshot', () => {
    createSnapshot(<Layout />)

    // You can match Enzyme wrappers
    //expect(wrapper).to.matchSnapshot();
    //
    // // Strings
    // expect('you can match strings').to.matchSnapshot();
    //
    // // Numbers
    // expect(123).to.matchSnapshot();
    //
    // // Or any object
    // expect({ a: 1, b: { c: 1 } }).to.matchSnapshot();

  });
    it('mount', () => {
           const layout = mountRender(<Layout />);
            const component = layout.instance();
            let changeSpy = sinon.spy(component, "changeLocale");


        const sandbox = sinon.createSandbox


          var but = layout.find(".aim");
              but.simulate("click");
             // component.setState = sinon.spy()

            component.changeLocale()
            sinon.assert.calledOnce(changeSpy);
            assert.strictEqual(component.state.locale, "ru")


        //sinon.spy(layout.changeLocale);
        // changeSpy.calledWith(component.changeLocale);
    });

});
