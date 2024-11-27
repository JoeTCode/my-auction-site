import axios from 'axios';
 const NOTIS_ENDPOINT = 'http://localhost:5005/api/notifications/get-by-uid'

export const getNotis = async (sub) => {
    try {
      const response = await axios.get(`${NOTIS_ENDPOINT}`, {
          headers: {
              'uid': sub
          }
      });
      console.log('Notifications:', response.data);
      return response.data;
    } catch (error) {
        console.error('Error fetching notifications:', error);
    };
};