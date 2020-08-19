import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { Spinner } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import '../../assets/styles/style.css';

function Home(props) {
    const { route } = props;
    return (
        <div>
            <Header />
            <main>
                <Suspense fallback={<Spinner />}>
                    {
                        renderRoutes(route.routes)
                    }
                </Suspense>
            </main>
            <Footer />
        </div>
    )
};

export default Home;