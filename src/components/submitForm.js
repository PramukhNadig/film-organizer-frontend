import React, { useState } from 'react';
import { generate6DigitMD5Hash, generateRandomMD5Hash, generateRandomName } from '../utils/randomNameGenerator.js';
import { Upload, Input, Checkbox, Button, message } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import '../css/submitForm.css';
const { Dragger } = Upload;

const SubmitForm = () => {
    const [zipFile, setZipFile] = useState(null);
    const [name, setName] = useState(generate6DigitMD5Hash());
    const [filename, setFilename] = useState(generateRandomMD5Hash());
    const [description, setDescription] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const handleFileChange = (file) => {
        setZipFile(file);
    };

    const handleNameClick = () => {
        navigator.clipboard.writeText(name);
        message.success('Copied!');
    };

    const handleFilenameClick = () => {
        navigator.clipboard.writeText(filename);
        message.success('Copied!');
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submission logic here
        console.log('Submitting form...');
        console.log('Zip File:', zipFile);
        console.log('Name:', name);
        console.log('Filename:', filename);
        console.log('Description:', description);
    };

    return (
        <div className="submit-form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} className="submit-form">
                <Dragger
                    name="zipFile"
                    accept=".zip"
                    onChange={handleFileChange}
                    fileList={zipFile ? [zipFile] : []}
                >
                    <p className="ant-upload-drag-icon">
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                </Dragger>
                <br />
                <Input
                    label="Name"
                    type="text"
                    value={name}
                    readOnly
                    addonAfter={<SyncOutlined onClick={() => setName(generate6DigitMD5Hash)} />}
                    onClick={handleNameClick}
                    style={{ width: '200px', height: '40px', borderRadius: '5px', border: '1px solid #ccc', cursor: 'pointer' }}
                />
                <br />
                <Input
                    label="Filename"
                    type="text"
                    value={filename}
                    readOnly
                    addonAfter={<SyncOutlined onClick={() => setFilename(generateRandomMD5Hash())} />}
                    onClick={handleFilenameClick}
                    style={{ width: '300px', height: '40px', borderRadius: '5px', border: '1px solid #ccc', cursor: 'pointer' }}
                />
                <br />
                <Input
                    label="Description"
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    style={{ width: '300px', height: '40px' }}
                />
                <br />
                <Checkbox
                    checked={isPrivate}
                    onChange={(event) => setIsPrivate(event.target.checked)}
                >
                    Private
                </Checkbox>
                <br />
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default SubmitForm;
