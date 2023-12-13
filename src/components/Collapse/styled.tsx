import styled from 'styled-components';

type ContentWrapperProps = {
  maxHeight: number;
};

export const Wrapper = styled.div``;

export const TriggerWrapper = styled.div``;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  color: inherit;
  overflow-y: hidden;
  transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  max-height: ${({ maxHeight }) => maxHeight || 0}px;
`;

export const Inner = styled.div``;
