import React, { useEffect } from 'react';
import { Route, Router, redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PushNotification = () => {
    const randomDataArray = ['Prepare For Google DSA & Algorithm', 'Solve LeetCode Problems', 'Research new Techniques'];

    useEffect(() => {
        const notificationInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * randomDataArray.length);
            const randomData = randomDataArray[randomIndex];
            displayNotification(randomData);
        }, 100000); // Display a notification every 10mins

        return () => {
            clearInterval(notificationInterval); // Clear the interval when the component unmounts
        };
    }, []);

    const displayNotification = (message) => {
        toast(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: false, // Auto-close the notification after 5 seconds
            closeButton: (
                <div>
                    <button onClick={() => handleAction('Yes')}>Yes</button>
                    <button onClick={() => handleAction('No')}>No</button>
                </div>
            )
            //   closeOnClick: false,
        });
    };
    const handleAction = (action) => {
        // Handle the action (e.g., perform some action based on "action" variable)
        // For example, you can display another notification based on the action.
        if (action === 'Yes') {
            window.open('vscode:C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/Google Questions and Interview', '_blank');
            // const { exec } = require('child_process');
            // window.location.href = '../';
        } else if (action === 'No') {
            toast.dismiss();
        }
    };

    return <ToastContainer />;
};

export default PushNotification;
