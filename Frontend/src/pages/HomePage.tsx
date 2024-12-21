import AlertForEventcalender from "@/components/homePageComponents/AlertForEventcalender";
import AllClubsSection from "@/components/homePageComponents/AllClubsSection";
import HeroSection from "@/components/homePageComponents/HeroSection";
import RecommendedClubsSection from "@/components/homePageComponents/RecommendedClubsSection";
import UpcomingEventsSection from "@/components/homePageComponents/UpcomingEventsSection";
import React from "react";

const HomePage = () => {
    return (
        <section id="home" className="py-[100px] flex flex-col gap-20 items-center px-2">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
                <div
                    style={{
                        clipPath:
                            "polygon(25.9% 55.9%, 0% 38.4%, 2.5% 73.1%, 14.5% 100%, 19.3% 98%, 27.5% 67.5%, 39.8% 37.6%, 47.6% 31.9%, 52.5% 41.7%, 54.8% 65.5%, 72.5% 23.3%, 100% 35.1%, 82.1% 0%, 72.4% 23.2%, 23.9% 2.3%, 25.9% 55.9%)",
                    }}
                    className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] translate-y-1/2 translate-x-2/3 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>{" "}
            {/* Hero Section */}
            <HeroSection />

            {/* View Event Calender */}
            <AlertForEventcalender />

            {/* Upcoming events section */}
            <UpcomingEventsSection />

            {/* View Recommended Clubs Section */}
            <RecommendedClubsSection />

            {/* View All Clubs Section */}
            <AllClubsSection />

        </section>
    );
};

export default HomePage;
