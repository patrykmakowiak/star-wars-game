import { renderHook, act } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';

import useGame from './useGame';
import { Step } from '../../types';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockUseSelector = useSelector as jest.Mock;
const mockUseDispatch = useDispatch as jest.Mock;
const mockDispatch = jest.fn();

it('Initial states value', () => {
  mockUseDispatch.mockImplementation(() => mockDispatch);
  mockUseSelector.mockImplementation(
    (callback) => callback({ starships: [], people: [] }),
  );

  const { result } = renderHook(() => useGame());

  expect(result.current.step).toBe(Step.START);
  expect(result.current.winner).toBeNull();
  expect(result.current.drawnPeopleCards).toEqual({
    playerA: null,
    playerB: null,
  });
  expect(result.current.drawnStarshipsCards).toEqual({
    playerA: null,
    playerB: null,
  });
  expect(result.current.selectedTypeCard).toBeNull();
});

it('Change steps', () => {
  mockUseDispatch.mockImplementation(() => mockDispatch);
  mockUseSelector.mockImplementation(
    (callback) => callback({ starships: [], people: [] }),
  );

  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.handleChangeStep(Step.SELECT_RESOURCE)();
  });

  expect(result.current.step).toBe(Step.SELECT_RESOURCE);

  act(() => {
    result.current.handleChangeStep(Step.SELECT_WINNER)();
  });

  expect(result.current.step).toBe(Step.SELECT_WINNER);
});
