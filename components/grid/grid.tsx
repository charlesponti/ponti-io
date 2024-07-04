import styled from "styled-components";

type GridProps = {
	xs?: number;
	sm?: number;
	md?: number;
};
export const Grid = styled.div<GridProps>`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    column-count: ${({ xs }) => xs};
  }

  @media (min-width: 481px) and (max-width: 768px) {
    column-count: ${({ sm }) => sm};
  }

  @media (min-width: 769px) {
    column-count: ${({ md }) => md};
  }
`;
