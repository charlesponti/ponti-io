/* eslint-disable @typescript-eslint/no-magic-numbers */
// import "@testing-library/jest-dom";
import mediaQuery from 'css-mediaquery';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';
import 'whatwg-fetch';

// Allow router mocks.
// eslint-disable-next-line no-undef
vi.mock('next/navigation', () => require('next-router-mock'));

import {
  DESKTOP_RESOLUTION_HEIGHT,
  DESKTOP_RESOLUTION_WIDTH,
} from './testUtils';

const COUNT = 1000;
const base = {
  data: {
    confirmed: { value: COUNT },
    deaths: { value: COUNT },
    recovered: { value: COUNT },
    lastUpdate: new Date().getTime(),
  },
};

const restHandlers = [
  http.get('https://covid19.mathdro.id/api', () => {
    return HttpResponse.json(base);
  }),
  http.get('https://covid19.mathdro.id/api/countries', () => {
    return HttpResponse.json([
      { name: 'US', iso2: 'US' },
      { name: 'Canada', iso2: 'CA' },
      { name: 'China', iso2: 'CN' },
      { name: 'Italy', iso2: 'IT' },
    ]);
  }),
  http.get('https://covid19.mathdro.id/api/countries/US', () => {
    return HttpResponse.json({
      confirmed: { value: COUNT },
      deaths: { value: COUNT },
      recovered: { value: COUNT },
      lastUpdate: new Date().getTime(),
    });
  }),
  http.get('https://covid19.mathdro.id/api/countries/global/confirmed', () => {
    return HttpResponse.json([
      {
        confirmed: 1000,
        deaths: 1000,
        lastUpdate: 1234,
        countryRegion: 'Test Country',
        provinceState: 'Test State',
        uid: 'test-uid',
      },
    ]);
  }),
  http.get('https://covid19.mathdro.id/api/countries/US/confirmed', () => {
    return HttpResponse.json([
      {
        confirmed: 1000,
        deaths: 1000,
        lastUpdate: 1234,
        county: 'Test County',
        state: 'Test State',
        uid: 'test-uid',
      },
    ]);
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => {
      function matchQuery(): boolean {
        return mediaQuery.match(query, {
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      const listeners: (() => void)[] = [];
      const instance = {
        matches: matchQuery(),
        addEventListener: (_: 'change', listener: () => void): void => {
          listeners.push(listener);
        },
        removeEventListener: (_: 'change', listener: () => void): void => {
          const index = listeners.indexOf(listener);
          if (index >= 0) {
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            listeners.splice(index, 1);
          }
        },
      };
      window.addEventListener('resize', () => {
        const change = matchQuery();
        if (change !== instance.matches) {
          instance.matches = change;
          for (const listener of listeners) listener();
        }
      });

      return instance;
    },
  });
  Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: () => {},
  });
  Object.defineProperty(window, 'resizeTo', {
    writable: true,
    value: (width: number, height: number) => {
      Object.assign(window, {
        innerWidth: width,
        innerHeight: height,
      }).dispatchEvent(new window.Event('resize'));
    },
  });
});

beforeEach(() => {
  window.resizeTo(DESKTOP_RESOLUTION_WIDTH, DESKTOP_RESOLUTION_HEIGHT);
});
