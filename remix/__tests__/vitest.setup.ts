import React from 'react';
import { installGlobals } from '@remix-run/node';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom/matchers';

// styled-components v6 references React as a global in its compiled output
(globalThis as any).React = React;

installGlobals();