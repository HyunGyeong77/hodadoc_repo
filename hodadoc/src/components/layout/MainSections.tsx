import MainLayout from '@layout/MainLayout';
import Hero from '@sections/Hero';
import Search from '@sections/Search';
import HealthCheckup from '@sections/HealthCheckup';
import HealthInfo from '@sections/HealthInfo';
import Anno from '@sections/Anno';
import Vaccin from '@sections/Vaccin';
import Footer from '@layout/Footer';

function MainSections() {
    return(
        <>
            <MainLayout>
                <Hero />
                <Search />
                <HealthCheckup />
                <HealthInfo />
                <Anno />
                <Vaccin />
            </MainLayout>
            <Footer />
        </>
    );
}

export default MainSections;