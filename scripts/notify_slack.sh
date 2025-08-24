set -euo pipefail


if [[ -z "${SLACK_WEBHOOK_URL:-}" ]]; then
echo "SLACK_WEBHOOK_URL not set" >&2
exit 1
fi


msg=${1:-"Event"}
json=$(cat <<EOF
{
"text": "$msg"
}
EOF
)


curl -X POST -H 'Content-type: application/json' --data "$json" "$SLACK_WEBHOOK_URL"