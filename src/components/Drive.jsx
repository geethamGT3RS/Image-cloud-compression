import React,{useState} from 'react';
import { FcOpenedFolder } from 'react-icons/fc';
import { FiFilePlus } from 'react-icons/fi';
import { Modal , Input} from 'antd' ;

export default function Drive() {
    const [foldername,setFolderName] = useState('')
    const [isModalVisible,setisModalVisible] = useState(false)
    const showModal = () => {
        setisModalVisible(true);
      };
    console.log(foldername)
    const handleOk = () => {
        setisModalVisible(false);
      };
    
    const handleCancel = () => {
        setisModalVisible(false);
      };    
    return (
    <div>
      <div className='icon-container'>
        <div class="upload-btn-wrapper">
        <FiFilePlus
          className='icon'
          color = 'yellow'
          size = {50}/>
        <input type="file" name="myfile" />
        </div>
        <FcOpenedFolder
          className='icon'
          color = 'blue'
          size = {50}
          onClick={showModal}/>
        </div>
        <Modal 
          title="Folder Upload" 
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel}
          centered>
          <Input placeholder = 'Folder name'
          onChange = {(event) => setFolderName(event.target.value)}/>
        </Modal>
    </div>
  )
}
