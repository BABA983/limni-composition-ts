/*
 * @Author: raoqidi
 * @Date: 2021-05-14 21:15:05
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-14 21:15:06
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/share.ts
 */
export const now = new Date();
export const today = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  0,
  0,
  0
);
export const tomorrow = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 1,
  0,
  0,
  0
);
