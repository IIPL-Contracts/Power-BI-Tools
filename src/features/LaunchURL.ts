import Package from "../Package.js";
import BaseFeature from "./BaseFeature.js";
import { Severity, Stage, VisualFeatureType } from "./FeatureTypes.js";

export default class LaunchURL implements BaseFeature {
    public static featureName = "Launch URL"
    public static documentationLink = "https://learn.microsoft.com/en-us/power-bi/developer/visuals/launch-url"
    public static severity = Severity.Info
    public static stage = Stage.PostBuild
    public static visualFeatureType = VisualFeatureType.NonSlicer | VisualFeatureType.Slicer 
    public static errorMessage = `${this.featureName} - ${this.documentationLink}`

    static isSupported(packageInstance: Package) {
        return packageInstance.contain(".launchUrl")
    }
} 