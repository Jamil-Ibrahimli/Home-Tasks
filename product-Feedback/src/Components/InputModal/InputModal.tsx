import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './input_modal.module.scss'
import { IoIosArrowUp } from "react-icons/io";
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';
import { addFeedback } from '../../Store/FeedBacksSlice';
import { FC } from 'react';

interface IInputModal {

  activModal: boolean;
  setIsActiveModal: Dispatch<SetStateAction<boolean>>;

}

const InputModal: FC<IInputModal> = ({ activModal, setIsActiveModal }) => {
  const [isActive, setIsActive] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descrError, setDescrError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const value = useSelector((state: RootState) => state.FeedBacksSliceReducer.value)
  const [feedObj, setFeedObj] = useState(

    {
      title: '',
      description: '',
      id: 1,
      category: ''
    })

  const [feedTitle, setFeedTitle] = useState({})
  const [feedDescr, setFeedDescr] = useState({})
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()



  const handleActive = () => {

    setIsActive((prev) => !prev)

  }

  console.log(activModal)

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFeedTitle((prev) => ({
      ...prev,
      title: e.target.value
    }));
    setTitleError(false)
  }



  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    setFeedDescr((prev) => ({

      ...prev,
      description: e.target.value

    }))

    setDescrError(false)

  }


  useEffect(() => {

    setFeedObj((prev) => ({


      ...prev,
      ...feedTitle,
      ...feedDescr,
      category: category

    })

    )

    setCategoryError(false)

  }, [feedTitle, feedDescr, category])

  console.log(value)

  const handleCategory=(category:string)=>{

  setCategory(category)
  setIsActive((prev) => !prev)

  }

  const handleAddFeedBack = () => {

    if (!feedObj.title.trim()) {

      setTitleError(true)

      return

    }
    else {

      setTitleError(false)
    }
    if (!feedObj.description.trim()) {

      setDescrError(true)
      return
    } else {
      setDescrError(false)
    }
    if (!feedObj.category) {

      setCategoryError(true)
      return
    } else {

      setCategoryError(false)

    }


    const newId = feedObj.id + 1;

    setFeedObj(prev => ({

      ...prev,
      id: newId,

    }))

    dispatch(
      addFeedback({

        ...feedObj,
        id: newId
      })

    )

    setFeedObj({

      title:'',
      description:'',
      category:'',
      id: newId

    })

    setFeedTitle({});
    setFeedDescr({});
    setCategory('')
  }


  const handleCancel = () => {

    setIsActiveModal(false)

    setFeedObj({

      title: '',
      description: '',
      category: '',
      id: feedObj.id + 1


    })

    setFeedTitle({});
    setFeedDescr({});
    setCategory('')

  }


  return (

    <>

      <div className={classNames(styles['input-modal'], { [styles['input-modal-active']]: activModal })}>
        <div className={styles['input-modal_plus']}><button>+</button></div>

        <div className={styles['input-modal_content']}>
          <div className={styles['input-modal_content_heading']}>Create New Feetback</div>
          <div className={styles['input-modal_content_title']}>
            <label htmlFor='title'>Feedback Title</label>
            <span>add shot title descr</span>
            <input type="text" id='title' onChange={handleTitle} value={feedObj.title} className={classNames({ [styles['title-error-active']]: titleError })} />
            {titleError && <p className={styles['input-title-error']}>Cant't be empty</p>}
          </div>

          <div className={styles['input-modal_content_category']}>
            <div className={styles['input-modal_content_category_title']}>
              <p>Category</p>
              <span>choose category</span>

              <div className={classNames(styles['input-modal_content_category_title_setted'], { [styles['category-error-active']]: categoryError })} onClick={handleActive}>
                <p>{category}</p>

                <span><IoIosArrowUp className={classNames(styles['category-icon'], { [styles['icon-active']]: isActive })} /></span></div>
            </div>
            {categoryError && <p className={styles['category-error']}>Cant'be empty</p>}

            <ul className={classNames(styles['input-modal_content_category_list'], { [styles['list-active']]: isActive })}>
              <li onClick={() => handleCategory('Feature')}>Fature</li>
              <li onClick={() => handleCategory('UI')}>UI</li>
              <li onClick={() => handleCategory('UX')}>UX</li>
              <li onClick={() => handleCategory('Enhancement')}>Enhancement</li>
              <li onClick={() => handleCategory('Bug')}>Bug</li>
            </ul>
          </div>
          <div className={styles['input-modal_content_feed-detail']}>

            <label htmlFor="text">Feedback Detail</label>
            <span>Include any spesific comments on what should be improved ,added ,etc.</span>
            <textarea id='text' onChange={handleDescription} value={feedObj.description} className={classNames({ [styles['input-error-active']]: descrError })} />
            {descrError && <p className={styles['description-error']}> Cant't be empty </p>}
          </div>

          <div className={styles['input-modal_content_buttons']}>

            <button className={styles.cancel} onClick={handleCancel}>Cancel</button>
            <button className={styles.add} onClick={handleAddFeedBack}>Add feedback</button>

          </div>

        </div>

      </div>

    </>


  )
}

export default InputModal