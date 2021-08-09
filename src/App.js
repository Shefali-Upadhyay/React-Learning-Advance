import { React, Component } from 'react';
import ComponentA from './components/ComponentA';
import ErrorBoundary from './components/ErrorBoundary';
import { UserProvider } from './components/userContext';
import Colour from './components/Colour';
import ParentComponent from './components/ParentComponent';
import { RefsComponent } from './components/RefsComponent';
import ForwardingRefs from './components/ForwardingRefs';
import Portals from './components/Portals';
import PropTypesTrial from './components/PropTypesTrial';
import RenderProps from './components/RenderProps';
import { Child1 } from './components/Child1';
import { Child2 } from './components/Child2';
import RenderButton from './components/RenderButton';
import Reconciliation from './components/Reconciliation';
import LifeCycles from './components/LifeCycles';
class App extends Component {
 render() {
   return (
     <div className='container'>
       <h1 className='text-center'>React Advance</h1>
       <h4 className='text-justify'>
         <b>React Context API(the state management tool) - </b>
         <i>
           Context provides a way to pass data through the component tree
           without having to pass props down manually at every level.
         </i>
       </h4>
       <h4 className='text-justify'>
         <b>Error Boundaries - </b>
         <i>
           A class component that implements either one or both of the
           lifecycle methods getDerivedStateFromError() or componentDidCatch()
           becomes an error boundary.
           <br />
           getDerivedStateFromError() renders a fallback UI if an error is
           thrown.
           <br /> componentDidCatch() used to log error information.
           <br />
           Error boundaries are used for class components and only catch errors
           in the components below them in the tree. An error boundary can’t
           catch an error within itself.
         </i>
       </h4>
       <h4>
         <b>Memoization - </b>
         <i>
           The process of caching a result of inputs linearly related to its
           output. So when the input is requested the output is returned from
           the cache without any computation.
         </i>
       </h4>
       <h4>
         <b>React Refs - </b>
         <i>
           Refs is the shorthand used for references in React. It is similar to
           keys in React. It is an attribute which makes it possible to store a
           reference to particular DOM nodes or React elements. It provides a
           way to access React DOM nodes or React elements and how to interact
           with it. It is used when we want to change the value of a child
           component, without making the use of props.
         </i>
       </h4>
       <h4>
         <b>Portals - </b>
         <i>
           First-class way to render child components into a DOM node outside
           of the parent DOM hierarchy defined by the component tree hierarchy.
         </i>
       </h4>
       <h4>
         <b>Type checking Props - </b>
         <i>Done using the prop-types package.</i>
       </h4>
       <h4>
         <b>Higher Order Components - </b>
         <i>
           HOC is an advanced technique for reusing component logic. It is a
           function that takes a component and returns a new component.
         </i>
       </h4>
       <h4>
         <b>Render Props - </b>
         <i>
           It refers to a technique for sharing code between React components
           using a prop whose value is a function.
         </i>
       </h4>
       <h4>
         <b>Reconciliation - </b>
         <i>
           Reconciliation is the process through which React updates the DOM.
           When a component’s state changes, React has to calculate if it is
           necessary to update the DOM. It does this by creating a virtual DOM
           and comparing it with the current DOM. In this context, the virtual
           DOM will contain the new state of the component.
         </i>
       </h4>
       <h4>
         <b>Component lifecycle in ReactJS - </b>
         <i>
           <ol>
             <li>
               Initialisation - Component is constructed with the provided
               properties and a default state. It’s done in the constructor of
               a component class
             </li>
             <li>
               Mounting - <br />
               componentWillMount() {'->'} render() {'->'} componentDidMount(){' '}
             </li>
             <li>Updating - <br />
               componentWillUpdate() {'->'} render() {'->'} componentDidUpdate(){' '}</li>
             <li>Unmounting - <br />
               componentWillUnmount()</li>
           </ol>
         </i>
       </h4>
       {/* here we assign the value */}
       <UserProvider value='Shefali'>
         <ComponentA />
       </UserProvider>
       {/* here we are defining the error boundary */}
       <h5>Components within the same Error Boundary</h5>
       {/* if an error occurs, none of the previous text before the error gets displayed */}
       {/* <ErrorBoundary>
         <Colour color='Red' />
         <Colour color='Blue' />
         <Colour color='Black' />
       </ErrorBoundary> */}
       <h5>Components within their own Error Boundary</h5>
       {/* here each component has their own error boundary, hence the colours red and blue get displayed */}
       {/* <ErrorBoundary>
         <Colour color='Red' />
       </ErrorBoundary>
       <ErrorBoundary>
         <Colour color='Blue' />
       </ErrorBoundary>
       <ErrorBoundary>
         <Colour color='Black' />
       </ErrorBoundary>
       <ParentComponent /> */}
       {/* <RefsComponent />
       <ForwardingRefs />
       <Portals /> */}
       <h5>
         <u>Type checking Props</u>
       </h5>
       <PropTypesTrial name='Shefali' age={26} />
       <PropTypesTrial name='Sonali' age={24} />
       <h5>
         <u>HOC</u>
       </h5>
       {/* you have a button that you want to be rendered with two different styles. Using the main ideas behind HOC, we do not need to create two buttons with different styles, but, rather, create a single button component and pass it through a wrapper function that modifies its props or styles and returns a new component. */}
       <RenderButton disable />
       <RenderButton />
       <h5>
         <u>Render Props</u>
       </h5>
       <RenderProps
         prop1={(name) => <Child1 name={name} />}
         prop2={(age) => <Child2 age={age} />}
       />
       <h5>
         <u>Reconciliation</u>
       </h5>
       <Reconciliation />
       <h5>
         <u>LifeCycles</u>
       </h5>
       <LifeCycles />
     </div>
   );
 }
}
 
export default App;
 