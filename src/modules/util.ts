const util = {
  success: (status: number, message: string, data?: object) => {
    return {
      status,
      success: true,
      message,
      data,
    };
  },
  fail: (status: number, message: string) => {
    return {
      status,
      success: false,
      message,
    };
  },
};

export default util;
