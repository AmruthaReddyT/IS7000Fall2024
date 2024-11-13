

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function UserProfileDetails() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <button
                    className="w-full flex justify-between items-center bg-gray-100 p-6 text-lg font-semibold text-gray-700"
                    onClick={() => toggleSection('personalInfo')}
                >
                    <span>Personal Information</span>
                    <span>{expandedSection === 'personalInfo' ? <FaChevronUp /> : <FaChevronDown />}</span>
                </button>
                {expandedSection === 'personalInfo' && (
                    <div className="p-6 bg-white text-gray-600">
                        <p>Facebook: Deepa</p>
                        <p>Mobile Phone: +1-000-000-0000</p>
                        <p>Tax Residence: United States</p>
                    </div>
                )}
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <button
                    className="w-full flex justify-between items-center bg-gray-100 p-6 text-lg font-semibold text-gray-700"
                    onClick={() => toggleSection('bankAccount')}
                >
                    <span>Bank Account</span>
                    <span>{expandedSection === 'bankAccount' ? <FaChevronUp /> : <FaChevronDown />}</span>
                </button>
                {expandedSection === 'bankAccount' && (
                    <div className="p-6 bg-white text-gray-600">
                        <p>Bank Name: XYZ Bank</p>
                        <p>Account Number: 1234567890</p>
                        <p>Account Type: Savings</p>
                    </div>
                )}
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <button
                    className="w-full flex justify-between items-center bg-gray-100 p-6 text-lg font-semibold text-gray-700"
                    onClick={() => toggleSection('aboutMe')}
                >
                    <span>About Me</span>
                    <span>{expandedSection === 'aboutMe' ? <FaChevronUp /> : <FaChevronDown />}</span>
                </button>
                {expandedSection === 'aboutMe' && (
                    <div className="p-6 bg-white text-gray-600">
                        <p>I am Deepa. A student at Indiana Tech University......</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserProfileDetails;
