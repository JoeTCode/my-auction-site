import { notificationToast } from '../../notification_toast/notificationToast';
import { loadImage } from '../../utils/utils'

export const sendNotis = async (getNotis, sub) => {
    const notifications = sub ? await getNotis(sub) : '';
    if (notifications) {
        notifications.map(async (item) => {
            console.log('notification object: ',item)
            const image = await loadImage(item.image);
            const { title, outbid_price, time_bid, item_id, name, hasEnded, isBidder } = item;
            notificationToast(sub, item_id, title, image, outbid_price, time_bid, name, hasEnded, isBidder);
        })
    }
}