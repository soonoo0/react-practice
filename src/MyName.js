import React from 'react';

const MyName = ({ name, age }) => {
    return (
        <div>
            안녕하세요! 제 이름은 {name}, {age} 입니다.
        </div>
    );
};

MyName.defaultProps = {
    name: '기본이름',
    age: '18'
};

export default MyName;