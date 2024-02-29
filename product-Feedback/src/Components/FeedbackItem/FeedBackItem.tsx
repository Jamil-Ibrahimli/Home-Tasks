import styles from './feedback_item.module.scss'
import { TbMessageCircle2Filled } from "react-icons/tb";
import { FC } from 'react';

interface IFeedbackItem {

  title: string;
  description: string;
  id: number;
  category: string;


}



const FeedBackItem: FC<IFeedbackItem> = ({ title, description, id, category }) => {
  return (

    <>
      <div className={styles.feedback_item}>
        <div className={styles.feedback_item_content}>
          <div className={styles['item-main']}>
            <h3 className={styles['item-main_title']}>{title}</h3>
            <p className={styles['item-main_description']} >{description}</p>
            <p className={styles['item-main_category']}>{category}</p>
          </div>
          <div className={styles['item-comments']}>
            <TbMessageCircle2Filled className={styles['item-comments_icon']} />
            <span>2</span>
          </div>

        </div>

      </div>
    </>

  )
}

export default FeedBackItem
