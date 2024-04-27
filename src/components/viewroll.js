import React from 'react';
import { Row, Col } from 'antd';

const ViewRoll = ({ id }) => {
    const getImagesFromRoll = (rollId) => {
        // Replace this with your actual function to get the images from the roll based on the roll ID
        return fetch(`/rolls/${rollId}/images`)
            .then((response) => response.json())
            .then((data) => data.images)
            .catch((error) => {
                console.error('Error fetching images:', error);
                return [];
            });
    };

    const renderPhotoRoll = async () => {
        const rollId = id; // Use the id from the props
        const images = await getImagesFromRoll(rollId);

        const rows = 5;
        const columns = 8;
        const totalImages = rows * columns;

        const renderedImages = images
            .slice(0, totalImages)
            .map((image, index) => (
                <Col span={3} key={index}>
                    <a href={image.url}>
                        <img src={image.url} alt={`Image ${index}`} style={{ width: '100%' }} />
                    </a>
                </Col>
            ));

        return (
            <div className="photo-roll">
                <Row gutter={[16, 16]} justify="center">
                    {renderedImages}
                </Row>
            </div>
        );
    };

    return renderPhotoRoll();
};

export default ViewRoll;
