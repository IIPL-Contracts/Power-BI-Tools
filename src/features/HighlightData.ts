import Package from "../Package.js";
import BaseFeature from "./BaseFeature.js";
import { Severity, Stage, VisualFeatureType } from "./FeatureTypes.js";

export default class HighlightData implements BaseFeature {
    public static featureName = "Highlight Data"
    public static documentationLink = "https://learn.microsoft.com/en-us/power-bi/developer/visuals/highlight"
    public static severity = Severity.Warning
    public static stage = Stage.PostBuild
    public static visualFeatureType = VisualFeatureType.NonSlicer 
    public static errorMessage = `${this.featureName} - ${this.documentationLink}`

    static isSupported(packageInstance: Package) {
        return packageInstance.isCapabilityEnabled({ supportsHighlight: true })
    }
} 