import Package from "../Package.js";
import BaseFeature from "./BaseFeature.js";
import { Severity, Stage, VisualFeatureType } from "./FeatureTypes.js";

export default class RenderingEvents implements BaseFeature {
    public static featureName = "Rendering Events"
    public static documentationLink = "https://learn.microsoft.com/en-us/power-bi/developer/visuals/event-service"
    public static severity = Severity.Warning
    public static stage = Stage.PostBuild
    public static visualFeatureType = VisualFeatureType.All
    public static errorMessage = `${this.featureName} - ${this.documentationLink}`

    static isSupported(packageInstance: Package) {
        const keywords = [".eventService", ".renderingStarted", ".renderingFinished"]
        return !keywords.some(keyword => !packageInstance.contain(keyword))
    }
} 