import Image from "next/image";

import { Star, Info } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MedicationDetailPage() {
  return (
    <main className="container max-w-6xl py-6 md:py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Medication Name"
            width={400}
            height={400}
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold">Medication Name</h1>
          <div className="mb-4 flex items-center">
            <div className="mr-2 flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(128 reviews)</span>
          </div>
          <p className="mb-4 text-2xl font-bold">$XX.XX</p>
          <p className="mb-6 text-muted-foreground">
            Brief description of the medication and its primary uses.
          </p>
          <div className="mb-6 flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
            <Button size="lg">Add to Cart</Button>
          </div>
          <div className="mb-6 flex items-center text-sm text-muted-foreground">
            <Info className="mr-2 h-4 w-4" />
            <span>Earn 50 Fundus Points with this purchase</span>
          </div>
          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="sideEffects">Side Effects</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <h2 className="mb-2 text-lg font-semibold">Product Details</h2>
              <ul className="list-inside list-disc space-y-1">
                <li>Active Ingredient: Lorem ipsum</li>
                <li>Dosage Form: Tablet</li>
                <li>Strength: 500mg</li>
                <li>Route of Administration: Oral</li>
              </ul>
            </TabsContent>
            <TabsContent value="sideEffects" className="mt-4">
              <h2 className="mb-2 text-lg font-semibold">
                Possible Side Effects
              </h2>
              <p>Common side effects may include:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Headache</li>
                <li>Nausea</li>
                <li>Dizziness</li>
                <li>Fatigue</li>
              </ul>
              <p className="mt-2">
                Consult your doctor if you experience any severe side effects.
              </p>
            </TabsContent>
            <TabsContent value="usage" className="mt-4">
              <h2 className="mb-2 text-lg font-semibold">How to Use</h2>
              <p>
                Take this medication by mouth as directed by your doctor,
                usually once daily with or without food. The dosage is based on
                your medical condition and response to treatment.
              </p>
              <p className="mt-2">
                Use this medication regularly to get the most benefit from it.
                To help you remember, take it at the same time each day.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
