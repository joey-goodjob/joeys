import { clsx, type ClassValue } from "clsx"; // 从 "clsx" 库中导入 clsx 和类型注解 ClassValue
import { twMerge } from "tailwind-merge"; // 从 "tailwind-merge" 库中导入 twMerge 函数

// 定义一个名为 cn 的导出函数，接受可变参数 inputs，类型为 ClassValue 的数组
export function cn(...inputs: ClassValue[]) {
  // 先调用 clsx 函数，将 inputs 数组中的类名进行合并，
  // 然后将结果传递给 twMerge 函数，最终返回合并后的字符串
  return twMerge(clsx(inputs));
}
