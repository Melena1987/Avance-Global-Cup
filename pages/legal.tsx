import React from 'react';
import Head from 'next/head';
import LegalPage from '../components/LegalPage';

const Legal: React.FC = () => {
    return (
        <>
            <Head>
                <title>Terms and Conditions & Cookie Policy | Avance Global Cup</title>
            </Head>
            <LegalPage />
        </>
    );
};
export default Legal;
