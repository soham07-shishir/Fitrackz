
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Heart, Flame, Droplet } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Fitness Dashboard</h1>
        <Tabs defaultValue="daily" className="space-y-4">
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="daily" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                icon={Activity}
                title="Steps"
                value="8,439"
                goal="10,000"
                unit="steps"
              />
              <MetricCard
                icon={Heart}
                title="Avg. Heart Rate"
                value="72"
                unit="bpm"
              />
              <MetricCard
                icon={Flame}
                title="Calories Burned"
                value="1,840"
                goal="2,200"
                unit="cal"
              />
              <MetricCard
                icon={Droplet}
                title="Water Intake"
                value="1.8"
                goal="2.5"
                unit="L"
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Activity Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Activity graph would go here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="weekly">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Weekly statistics would go here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="monthly">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monthly progress report would go here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function MetricCard({ icon: Icon, title, value, goal, unit }: { 
  icon: React.ElementType, 
  title: string, 
  value: string, 
  goal?: string, 
  unit: string 
}) {
  const progress = goal ? (parseFloat(value) / parseFloat(goal)) * 100 : 100

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value} <span className="text-sm font-normal text-muted-foreground">{unit}</span></div>
        {goal && (
          <Progress
            value={progress}
            className="mt-2"
          />
        )}
        {goal && (
          <p className="text-xs text-muted-foreground mt-1">Goal: {goal} {unit}</p>
        )}
      </CardContent>
    </Card>
  )
}

