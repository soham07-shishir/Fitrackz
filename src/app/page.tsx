import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Heart, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";
import { AnimatedImage } from "@/components/animated-image";
import { FadeInSection } from "@/components/fade-in-section";
import { getSession } from "@/lib/session";

// export async function getClientSideProps() {
//   const session = await getSession();
//   return { props: { isUserAuthenticated: session.isUserAuthenticated, user: session.user } };
// }

// interface SessionProps {
//   isUserAuthenticated: boolean;
//   user: any;
// }

// export default function Home({ isUserAuthenticated, user }: SessionProps) {
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* HERO SECTION START */}
        <FadeInSection>
          <section className="relative bg-background py-20 min-h-[60vh] flex items-center">
            <HeroCarousel />
            <div className="container mx-auto px-4 text-center relative z-10">
              <h1 className="text-4xl font-bold mb-6 text-white">
                Welcome to Fitrackz
              </h1>
              <p className="text-xl mb-8 text-white">
                Your personal fitness companion for a healthier lifestyle
              </p>
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </FadeInSection>
        {/* HERO SECTION END */}
        {/* SECTION 1 START */}
        <FadeInSection>
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                  <h2 className="text-5xl font-bold mb-6 leading-tight">
                    Be Fit while using Phone
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Transform your smartphone into a powerful fitness tool.
                    Track your progress, stay motivated, and achieve your health
                    goals with Fitrackz.
                  </p>
                </div>
                <div className="md:w-1/2 h-[800px] relative overflow-hidden">
                  <div className="inset-0 md:-left-12">
                    <AnimatedImage />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        {/* SECTION 1 END */}

        {/* SECTION 2 START */}
        <FadeInSection>
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Health is Essential, Don't Forget It
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={Activity}
                  title="Daily Reminders"
                  description="Get gentle nudges to move, hydrate, and take care of your health throughout the day."
                />
                <FeatureCard
                  icon={Heart}
                  title="Stress Management"
                  description="Learn techniques to manage stress and improve your overall well-being."
                />
                <FeatureCard
                  icon={Zap}
                  title="Sleep Tracking"
                  description="Optimize your sleep patterns for better health and increased energy."
                />
              </div>
            </div>
          </section>
        </FadeInSection>
        {/* SECTION 2 END */}

        {/* SECTION 3 START */}
        <FadeInSection>
          
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Improve Your Quality of Life
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Before Fitrackz</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-red-500" /> Inconsistent
                    exercise routine
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-red-500" /> Poor sleep
                    quality
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-red-500" /> Lack of
                    motivation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-red-500" /> Limited health
                    awareness
                  </li>
                </ul>
              </div>
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">After Fitrackz</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> Consistent,
                    personalized workouts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> Improved
                    sleep patterns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> Increased
                    energy and motivation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" />{" "}
                    Comprehensive health insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </FadeInSection>
        {/* SECTION 3 END */}

        {/* SECTION 4 START */}
        <FadeInSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of users who have already improved their health
              with Fitrackz.
            </p>
            <Button asChild size="lg">
              <Link href="/dashboard">
                Start Your Journey <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        </FadeInSection>
        {/* SECTION 4 END */}
      </main>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md text-center">
      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
