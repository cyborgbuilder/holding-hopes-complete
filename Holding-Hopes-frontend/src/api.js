export const getComments = async () => {
    return [
      {
        id: "1",
        body: " Is depression a mental illness?",
        username: "User",
        userId: "1",
        parentId: null,
        createdAt: "2022-07-20T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Do children get depression?",
        username: "User",
        userId: "2",
        parentId: null,
        createdAt: "2022-07-22T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Yes, clinical depression is a serious, but treatable, mental illness. It is a medical condition, not a personal weakness. It is also very common. Major depression is a clinical syndrome that affects about 6.7% of the U.S. population over age 18, according to the National Institute of Mental Health.   ",
  
        username: "User",
        userId: "2",
        parentId: "1",
        createdAt: "2022-07-22T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: " Yes. Children are subject to the same factors that cause depression in adults.These include: A change in physical health, life events, heredity, or inheritance, environment, and chemical disturbance in the brain.  ",
        username: "User",
        userId: "2",
        parentId: "2",
        createdAt: "2022-07-21T23:00:33.010+02:00",
      },
      
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "User",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };
  