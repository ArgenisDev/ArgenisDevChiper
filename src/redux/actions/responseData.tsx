export const responseData = (
  type: string,
  success: boolean,
  message: string,
  data: object,
) => {
  return {
    type,
    success,
    message,
    data,
  };
};
