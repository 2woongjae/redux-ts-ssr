// 타입 정의
export const ADD_AGE = 'ADD_AGE';

// 타입 생성 함수
export function addAge(): { type: string; } {
  return {
    type: ADD_AGE
  };
}