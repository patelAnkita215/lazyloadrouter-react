import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu';
import WelcomeToClassCompo from './01WelcomeToClassCompo';
import ClassCompoConstructor from './02ClassCompoConstructor';
import ClassCompoState from './03ClassCompoState';
import ClassCompojsx from './04ClassCompojsx';
import PropsCompo from './05PropsCompo';
import LifeCycleCompo from './06StateLifeCycle';
import PropsExampleComp from './props-example/props-example';

class ClassCompRoute extends Component {
    render() {
        return (
            <>
               <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<WelcomeToClassCompo />} />
                        <Route path="classcompoconstructor" element={<ClassCompoConstructor />} />
                        <Route path="classcompostate" element={<ClassCompoState />} />
                        <Route path="classcompojsx" element={<ClassCompojsx />} />
                        <Route path="props" element={<PropsCompo />} />
                        <Route path="lifecycle" element={<LifeCycleCompo />} />
                        <Route path="props-example" element={<PropsExampleComp />} />
                    </Route>
                </Routes> 
            </>
        );
    }
}

export default ClassCompRoute;