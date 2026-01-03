def compute_health(rms: float, kurtosis: float) -> float:
    rms_norm = min(rms / 0.35, 1.0)
    kurt_norm = min((kurtosis - 3) / 4, 1.0)

    health = 100 * (1 - (0.5 * rms_norm + 0.5 * kurt_norm))
    return round(max(0, health), 2)


def compute_severity(health: float) -> str:
    if health > 80:
        return "Normal"
    elif health > 60:
        return "IR007"
    elif health > 40:
        return "IR014"
    elif health > 20:
        return "IR021"
    else:
        return "IR028"