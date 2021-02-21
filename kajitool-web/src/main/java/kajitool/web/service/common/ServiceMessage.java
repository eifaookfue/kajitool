package kajitool.web.service.common;

import java.util.List;

public class ServiceMessage {
    private final String code;

    public String getMessage() {
        return message;
    }

    private final String message;
    private final List<?> details;

    public String getCode() {
        return code;
    }

    public ServiceMessage(final String code,
                          final String message) {
        this.code = code;
        this.message = message;
        this.details = null;
    }

    public ServiceMessage(final String code,
                          final String message,
                          final List<?> details) {
        this.code = code;
        this.message = message;
        this.details = details;
    }

    public List<?> getDetails() {
        return details;
    }
}
