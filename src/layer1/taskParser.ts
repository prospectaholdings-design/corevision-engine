// TaskParser.ts

export interface UserPrompt {
    prompt: string;
    intent?: string;
    industry?: string;
    location?: string;
    outputTypes?: Array<string>;
    urgency?: string;
}

export class TaskParser {
    private userPrompt: UserPrompt;

    constructor(prompt: string) {
        this.userPrompt = { prompt };
    }

    extractIntent(): void {
        // Logic to extract intent from the prompt
        // Example: if the prompt contains 'generate report', set intent to 'report'
        this.userPrompt.intent = this.matchIntent(this.userPrompt.prompt);
    }

    extractIndustry(): void {
        // Logic to extract industry from the prompt
        // Example: if the prompt contains 'healthcare', set industry to 'healthcare'
        this.userPrompt.industry = this.matchIndustry(this.userPrompt.prompt);
    }

    extractLocation(): void {
        // Logic to extract location from the prompt
        // Example: if the prompt contains 'in New York', set location to 'New York'
        this.userPrompt.location = this.matchLocation(this.userPrompt.prompt);
    }

    extractOutputTypes(): void {
        // Logic to extract output types from the prompt
        // Example: if the prompt contains 'PDF', 'CSV', set outputTypes array accordingly
        this.userPrompt.outputTypes = this.matchOutputTypes(this.userPrompt.prompt);
    }

    extractUrgency(): void {
        // Logic to extract urgency from the prompt
        // Example: if the prompt contains 'ASAP', set urgency to 'high'
        this.userPrompt.urgency = this.matchUrgency(this.userPrompt.prompt);
    }

    // Helper methods for matching details in the prompt
    private matchIntent(prompt: string): string | undefined {
        // Implement your intent matching logic here
        return prompt.includes('report') ? 'generate report' : undefined;
    }

    private matchIndustry(prompt: string): string | undefined {
        // Implement your industry matching logic here
        return prompt.includes('healthcare') ? 'healthcare' : undefined;
    }

    private matchLocation(prompt: string): string | undefined {
        // Implement your location matching logic here
        return prompt.includes('in New York') ? 'New York' : undefined;
    }

    private matchOutputTypes(prompt: string): Array<string> {
        // Implement your output types matching logic here
        const outputTypes = [];
        if (prompt.includes('PDF')) outputTypes.push('PDF');
        if (prompt.includes('CSV')) outputTypes.push('CSV');
        return outputTypes;
    }

    private matchUrgency(prompt: string): string | undefined {
        // Implement your urgency matching logic here
        return prompt.includes('ASAP') ? 'high' : undefined;
    }

    public parse(): UserPrompt {
        this.extractIntent();
        this.extractIndustry();
        this.extractLocation();
        this.extractOutputTypes();
        this.extractUrgency();
        return this.userPrompt;
    }
}